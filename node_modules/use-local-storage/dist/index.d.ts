/// <reference types="react" />
declare type Serializer<T> = (object: T | undefined) => string;
declare type Parser<T> = (val: string) => T | undefined;
declare type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;
declare type Options<T> = Partial<{
    serializer: Serializer<T>;
    parser: Parser<T>;
    logger: (error: any) => void;
    syncData: boolean;
}>;
declare function useLocalStorage<T>(key: string, defaultValue: T, options?: Options<T>): [T, Setter<T>];
export default useLocalStorage;
