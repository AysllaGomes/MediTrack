import { isValidObjectId } from 'mongoose';

import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ValidateObjectIdPipe implements PipeTransform<string> {
  transform(value: string) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`Invalid ID format: ${value}`);
    }
    return value;
  }
}
