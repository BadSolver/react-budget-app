import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IExpense {
    id: number,
    body: string,
    cost: number,
}

interface IExpensesContext {
    expenses: IExpense[];
    setExpenses: (expenses: IExpense) => void;
}

const ExpensesContext = createContext<IExpensesContext>({
  expenses: [],
  setExpenses: (value: IExpense) => {}
});

const useExpensesValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => {
    return {
        expenses: [{
            id: 3,
            body: '',
            cost: 1000
        }],
        setExpenses: (value: IExpense) => {
          setExpensesContext(ctx => ({...ctx, expenses: [...ctx.expenses, value]}))
        }
    }
  });

  return expensesContext;
};

export const useExpensesContext = () => {
  return useContext<IExpensesContext>(ExpensesContext)
}

export const ExpensesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ExpensesContext.Provider value={useExpensesValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
