export interface ManagedProperty<T> {
    CanBeChanged: boolean
    ManagedPropertyLogicalName: string
    Value: T
}