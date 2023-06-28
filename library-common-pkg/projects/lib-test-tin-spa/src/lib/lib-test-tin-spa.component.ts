import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib-test-tin-spa',
  template: `
    <p>
    Hiện đang có {{count}} sản phẩm trong giỏ hàng!
    </p>
  `,
  styles: [
  ]
})
export class LibTestTinSpaComponent implements OnInit {

  @Input() count: number = 0;

  ngOnInit(): void {

  }
}
