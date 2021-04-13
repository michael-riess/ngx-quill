export type OperationKey = false | { text: string }

export type TableModuleOptions = {
    operationMenu: {
        items: {
            insertColumnRight?: OperationKey
            insertColumnLeft?: OperationKey
            insertRowUp?: OperationKey
            insertRowDown?: OperationKey
            mergeCells?: OperationKey
            unmergeCells?: OperationKey
            deleteColumn?: OperationKey
            deleteRow?: OperationKey
            deleteTable?: OperationKey
        }
        color?: {
          colors?: string[]
          text?: string
        }
    }
}
