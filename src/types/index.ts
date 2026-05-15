export interface Transaction {
  id: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  note?: string;
  date: string;
  createdAt: string;
}

export interface Budget {
  monthlyIncome: number;
  housingExpense: number;
  transportExpense: number;
  foodExpense: number;
  subscriptionsExpense: number;
  otherExpense: number;
}

export interface UserProfile {
  name: string;
  onboarded: boolean;
  createdAt: string;
  budget: Budget;
}
