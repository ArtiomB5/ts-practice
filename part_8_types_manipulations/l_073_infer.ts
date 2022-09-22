function runTransaction(
  transaction: {
    fromTo: [string, string];
  },
  param2: number
) {
  console.log(transaction);
}

type GetFirstArg<T> = T extends (param1: infer Param1Type, ...args: any) => void
  ? Param1Type
  : never;

const transaction: GetFirstArg<typeof runTransaction> = {
  fromTo: ["1", "2"],
};

const inferTest: GetFirstArg<typeof runTransaction> = { fromTo: ["3", "5"] };
