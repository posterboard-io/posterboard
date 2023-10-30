import { StripePlans } from '~/types/types';

export const freePlan: StripePlans = {
    name: 'Free',
    description: 'Free Forever - Seriously we mean it.',
    price: 0.00,
    stripePriceId: 'price_1IYDQdK2Vj0Qp3pX0qY4c8fV',
}

export const studentPlan: StripePlans = {
    name: 'Student',
    description: 'We get it. You have no money. We\'ve been there.',
    price: 5.00,
    stripePriceId: 'price_1IYDQdK2Vj0Qp3pX0qY4c8fV',
}

export const proPlan: StripePlans = {
    name: 'Pro',
    description: 'Thanks for paying our AWS bills.',
    price: 10.00,
    stripePriceId: 'price_1IYDQdK2Vj0Qp3pX0qY4c8fV',
}