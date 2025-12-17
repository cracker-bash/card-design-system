"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Home, Wallet, ArrowUpRight, ArrowDownRight, Download } from "lucide-react"

interface Transaction {
  id: string
  type: "earning" | "withdrawal"
  amount: string
  description: string
  date: string
  status: "completed" | "pending"
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: "earning",
    amount: "+TSH 2,000",
    description: "Referral bonus - John Mwangi",
    date: "2024-11-28",
    status: "completed",
  },
  {
    id: "2",
    type: "earning",
    amount: "+TSH 1,500",
    description: "Card creation commission",
    date: "2024-11-27",
    status: "completed",
  },
  {
    id: "3",
    type: "withdrawal",
    amount: "-TSH 50,000",
    description: "Withdrawal to M-Pesa",
    date: "2024-11-25",
    status: "completed",
  },
  {
    id: "4",
    type: "earning",
    amount: "+TSH 3,000",
    description: "Referral bonus - Mary Kimani",
    date: "2024-11-24",
    status: "pending",
  },
]

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Earnings</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Earnings</h1>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="h-8 w-8" />
            <span className="text-sm opacity-90">Available Balance</span>
          </div>
          <p className="text-3xl font-bold">TSH 156,000</p>
          <Button variant="secondary" size="sm" className="mt-4">
            Withdraw
          </Button>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <ArrowUpRight className="h-5 w-5 text-green-500" />
            <span className="text-sm text-muted-foreground">Total Earnings</span>
          </div>
          <p className="text-3xl font-bold">TSH 256,500</p>
          <p className="text-sm text-green-500 mt-2">+12% this month</p>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-2 mb-4">
            <ArrowDownRight className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-muted-foreground">Total Withdrawn</span>
          </div>
          <p className="text-3xl font-bold">TSH 100,500</p>
          <p className="text-sm text-muted-foreground mt-2">3 withdrawals</p>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-card rounded-lg border">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Recent Transactions</h3>
        </div>
        <div className="divide-y">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-4 flex items-center justify-between hover:bg-muted/50">
              <div className="flex items-center gap-4">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    transaction.type === "earning"
                      ? "bg-green-100 dark:bg-green-900"
                      : "bg-orange-100 dark:bg-orange-900"
                  }`}
                >
                  {transaction.type === "earning" ? (
                    <ArrowUpRight className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${transaction.type === "earning" ? "text-green-600" : "text-orange-600"}`}>
                  {transaction.amount}
                </p>
                <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
