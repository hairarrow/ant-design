import * as React from 'react';
import { BadgeProps } from '../badge';
import { ConfigConsumerProps } from 'antd/es/config-provider';
import { ConfigConsumer } from '../config-provider';

export interface IRibbonProps extends Pick<BadgeProps, 'status' | 'color' | 'text'> {
  position?: 'right' | 'left';
  size?: 'small' | 'regular' | 'large';
}

const Ribbon: React.FunctionComponent<IRibbonProps> = props => {
  const renderRibbon = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { children, text } = props;
    const prefixCls = getPrefixCls('badge-ribbon');

    return (
      <span className={prefixCls}>
        {children}
        <span className={`${prefixCls}-ribbon`}>
          <span className={`${prefixCls}-ribbon-container`}>{text}</span>
        </span>
      </span>
    );
  };

  return <ConfigConsumer>{renderRibbon}</ConfigConsumer>;
};

export default Ribbon;
