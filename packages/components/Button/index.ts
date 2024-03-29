import type { ExtractPropTypes } from 'vue';
import button from './src/BasicButton.vue';
import { buttonProps } from './src/props';

export const Button = button;
export declare type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
