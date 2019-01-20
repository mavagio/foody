import {
  animation, trigger, animateChild, group, state,
  transition, animate, style, query
} from '@angular/animations';

export const scaleUp = trigger('scaleUp', [
  state('in', style({opacity: 1, transform: 'translate3d(0, 0, 0)'})),
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'scale(0.5)',
    }),
    animate('200ms ease-in')
  ])
]);

export const numberChangeAnimation = trigger('numberChangeAnimation', [
  transition(':increment', [
    style({ transform: 'translateY(20%)'}),
    animate('200ms ease-in')
  ]),
  transition(':decrement', [
    style({ opacity: 0.3, transform: 'translateY(-20%)'}),
    animate('200ms ease-in')
  ]),
]);