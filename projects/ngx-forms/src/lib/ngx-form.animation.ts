import { animate, style, transition, trigger, group, query } from '@angular/animations';

export const ApplyFormAnimations = trigger(
    'enterLeave',
    [
        transition(
            ':increment',
            group([
                query(':enter',
                    [
                        style({ top: '100vw', opacity: 0, overflow: 'hidden' }),
                        animate('0.5s 0.3s ease-in-out', style({ top: 0, opacity: 1, overflow: 'auto' }))
                    ]),
                query(':leave',
                    [
                        style({ top: 0, opacity: 1, overflow: 'hidden' }),
                        animate('0.3s', style({ top: '-100vh', opacity: 0, overflow: 'hidden' }))
                    ]),
            ])
        ),
        transition(
            ':decrement',
            group([
                query(':enter',
                    [
                        style({ top: '-100vw', opacity: 0, overflow: 'hidden' }),
                        animate('0.5s 0.3s ease-in-out', style({ top: 0, opacity: 1, overflow: 'auto' }))
                    ]),
                query(':leave',
                    [
                        style({ top: 0, opacity: 1, overflow: 'hidden' }),
                        animate('0.3s', style({ top: '100vh', opacity: 0, overflow: 'hidden' }))
                    ]),
            ])
        ),
    ]
);