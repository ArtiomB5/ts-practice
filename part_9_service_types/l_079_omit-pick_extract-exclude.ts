interface PaymentPersistent079 {
    id: number;
    sum: number;
    from: string;
    to: string;
}

//omit позволяет создать новый тип на основе имеющегося, убрав из него указанные ключи
type PaymentOmitType079 = Omit<PaymentPersistent079, 'id' | 'sum'>

//omit позволяет создать новый тип на основе имеющегося, оставив из него указанные ключи
type PaymentPickType079 = Pick<PaymentPersistent079, 'id' | 'to'>

//extract позволяет создать новый тип на основе имеющего, достав из него тип, указав после запятой и используя его как тип ExtractEx1Type079 или ExtractEx2Type079
type ExtractEx1Type079 = Extract<'from' | 'to' | PaymentOmitType079, string>
type ExtractEx2Type079 = Extract<'from' | 'to' | PaymentOmitType079, PaymentOmitType079>

//extract позволяет создать новый тип на основе имеющего, убрав из него тип, указав после запятой и используя оставшиеся типы как тип ExcludeEx1Type079
type ExcludeEx1Type079 = Exclude<'from' | 'to' | PaymentOmitType079, string>