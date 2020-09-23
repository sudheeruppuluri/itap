import { Component, forwardRef, HostBinding, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { state } from '../../interfaces/general';

@Component({
  selector: 'tc-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TCSwitcherComponent),
      multi: true
    }
  ]
})
export class TCSwitcherComponent implements OnInit {
  @HostBinding('class.tc-switcher') true;
  @HostBinding('class.checked') get focus() {
    return this._value;
  }
  @HostBinding('class.disabled') @Input() disabled: boolean;
  @Input() label: string;
  @Input() name: string;
  @Input('value') _value: boolean;
  @Input() bgColor: string | string[];
  @Input() borderColor: string | string[];
  @Input() color: string | string[];
	@Input() labelColor: string | string[];
	@Output() valueChanged: EventEmitter<boolean>;
  currentBgColor: string;
  currentBorderColor: string;
  currentColor: string;
  currentLabelColor: string;
  states: any;
  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() {
		this.valueChanged = new EventEmitter();
    this._value = false;
    this.label = '';
    this.name = '';
    this.disabled = false;
    this.states = state;
  }

  ngOnInit() {
    this.setStyles(this.disabled ? this.states.disabled : (this._value ? this.states.focus : this.states.default));
  }

  get value() {
    return this._value;
  }

  set value(val) {
		this._value = val;
		this.valueChanged.emit(val);
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  switch(bool: boolean) {
    if (!this.disabled) {
      this.value = !bool;

      this.setStyles(this.states[!bool ? 'focus' : 'hover']);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.disabled) {
      this.setStyles(this.states[this.value ? 'focus' : 'hover']);
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (!this.disabled) {
      this.setStyles(this.states[this.value ? 'focus' : 'default'])
    }
  }

  setStyles(
    st: state,
    bg: string | string[] = this.bgColor,
    border: string | string[] = this.borderColor,
    color: string | string[] = this.color,
    labelColor : string | string[] = this.labelColor
  ) {
    let styleIndex: number = 0;

    switch (st) {
      case this.states.hover:
        styleIndex = 1;
        break;
      case this.states.focus:
        styleIndex = 2;
        break;
      case this.states.disabled:
        styleIndex = 3;
        break;
      default:
        styleIndex = 0;
    }

    this.currentBgColor = bg instanceof Array ? bg[styleIndex] : bg;
    this.currentBorderColor = border instanceof Array ? border[styleIndex] : border;
    this.currentColor = color instanceof Array ? color[styleIndex] : color;
    this.currentLabelColor = labelColor instanceof Array ? labelColor[styleIndex] : labelColor;
  }

  getStyles() {
    return {
      'background-color': this.currentBgColor,
      'border-color': this.currentBorderColor
    }
  }
  getDetectorColor() {
    return {
      'background': this.currentColor
    }
  }
  getLabelColor() {
    return {
      'color': this.currentLabelColor
    }
  }
}
