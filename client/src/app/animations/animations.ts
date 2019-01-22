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
    style({opacity: 0, transform: 'translateY(10%)'}),
    animate('200ms ease-in')
  ]),
  transition(':decrement', [
    style({opacity: 0, transform: 'translateY(-10%)'}),
    animate('200ms ease-in')
  ]),
]);

export const progressAnimation = trigger('progressAnimation', [
  transition('void => *', [
    style({
      width: '0%',
    }),
    animate('300ms ease-in')
  ])
]);

export const activeStepCircle = trigger('activeStepCircle', [
  state('active', style({ border: '2px solid #11F6C3'})),
  transition('* => active', [
    animate('300ms 300ms ease-in')
  ])
]);

export const brightDimSelection = trigger('brightDimSelection', [
  state('active', style({ background: 'none'})),
  transition('* => active', [
    animate('300ms ease-in')
  ])
]);

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => WeeksPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ top: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({transform: 'scale(1.8)', opacity: 0,}))
        ]),
        query(':enter', [
          // animate('300ms ease-out', style({transform: 'translateX(100%)'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);