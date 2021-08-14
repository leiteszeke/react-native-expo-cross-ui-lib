export type VoidFunction = () => void;

export type Generic<T = unknown> = {
  [key: string]: T;
};

export type WithTestID<P> = P & { testID?: string };

export type WithInsets<P> = P & {
  insets: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
};
