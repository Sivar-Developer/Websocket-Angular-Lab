import { NgModule } from '@angular/core';
import { TruncatePipe } from './truncate/truncate.pipe';
import { FileSizePipe } from './file-size/file-size.pipe';
import { ShortNumberPipe } from './short-number/short-number.pipe';

@NgModule({
  declarations: [
    TruncatePipe,
    FileSizePipe,
    ShortNumberPipe
  ],
  providers: [],
  exports: [
    TruncatePipe,
    FileSizePipe,
    ShortNumberPipe
  ]
})

export class PipesModule {}
