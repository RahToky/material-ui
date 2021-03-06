import * as React from 'react';
import { StandardProps } from '..';

export interface ContainerProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ContainerClassKey> {
  fixed?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

export type ContainerClassKey =
  | 'root'
  | 'fixed'
  | 'maxWidthXs'
  | 'maxWidthSm'
  | 'maxWidthMd'
  | 'maxWidthLg'
  | 'maxWidthXl';

declare const Container: React.ComponentType<ContainerProps>;

export default Container;
