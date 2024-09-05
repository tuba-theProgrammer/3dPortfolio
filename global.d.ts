declare module 'react-vertical-timeline-component' {
    import { ReactNode, CSSProperties } from 'react';
  
    export const VerticalTimeline: React.FC<{
      children?: ReactNode;  // Add children prop here
    }>;
  
    export const VerticalTimelineElement: React.FC<{
      contentStyle?: CSSProperties;
      contentArrowStyle?: CSSProperties;
      date?: string;
      visible?: any,
      iconStyle?: CSSProperties;
      icon?: ReactNode;
      children?: ReactNode;  // Add children prop here
    }>;
  }
      