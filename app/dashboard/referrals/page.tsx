"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Copy, Share2, Users, Gift, TrendingUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ReferralsPage() {
  const { toast } = useToast()
  const referralCode = "NYAMIZI-REF-2024"
  const referralLink = `https://nyamizidigitals.com/register?ref=${referralCode}`

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    })
  }

  const stats = {
    totalReferrals: 12,
    activeReferrals: 8,
    pendingRewards: "TSH 24,000",
    totalEarnings: "TSH 156,000",
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span>Home</span>
        <span>/</span>
        <span>Referrals</span>
      </div>

      <h1 className="text-2xl font-bold">Affiliate Program</h1>

      {/* Referral Link Card */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold">Your Referral Link</h2>
            <p className="text-sm text-muted-foreground">Share this link and earn rewards for every signup</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Input value={referralLink} readOnly className="bg-background" />
          <Button onClick={() => copyToClipboard(referralLink)}>
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
        </div>

        <div className="mt-4 p-3 bg-background rounded-lg">
          <p className="text-sm">
            <span className="font-medium">Your Code:</span>{" "}
            <code className="bg-muted px-2 py-1 rounded">{referralCode}</code>
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.totalReferrals}</p>
              <p className="text-sm text-muted-foreground">Total Referrals</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.activeReferrals}</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
              <Gift className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.pendingRewards}</p>
              <p className="text-sm text-muted-foreground">Pending Rewards</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.totalEarnings}</p>
              <p className="text-sm text-muted-foreground">Total Earnings</p>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-card rounded-lg border p-6">
        <h3 className="font-semibold mb-4">How it Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h4 className="font-medium mb-1">Share Your Link</h4>
            <p className="text-sm text-muted-foreground">Share your unique referral link with friends and family</p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h4 className="font-medium mb-1">They Sign Up</h4>
            <p className="text-sm text-muted-foreground">
              When they register using your link, they become your referral
            </p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h4 className="font-medium mb-1">Earn Rewards</h4>
            <p className="text-sm text-muted-foreground">Get rewarded when they create and send cards</p>
          </div>
        </div>
      </div>
    </div>
  )
}
