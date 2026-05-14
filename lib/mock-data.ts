// Mock data for the SaaS Dashboard

export const kpiData = {
  revenue: { value: "$124,592", change: "+12.5%", trend: "up", label: "Total Revenue" },
  users: { value: "48,291", change: "+8.2%", trend: "up", label: "Active Users" },
  churn: { value: "2.4%", change: "-0.3%", trend: "down", label: "Churn Rate" },
  mrr: { value: "$18,420", change: "+5.7%", trend: "up", label: "MRR" },
  arr: { value: "$221,040", change: "+5.7%", trend: "up", label: "ARR" },
  arpu: { value: "$38.20", change: "+2.1%", trend: "up", label: "ARPU" },
};

export const revenueOverTime = [
  { month: "Jan", revenue: 65000, expenses: 42000 },
  { month: "Feb", revenue: 72000, expenses: 44000 },
  { month: "Mar", revenue: 68000, expenses: 41000 },
  { month: "Apr", revenue: 85000, expenses: 48000 },
  { month: "May", revenue: 91000, expenses: 52000 },
  { month: "Jun", revenue: 88000, expenses: 50000 },
  { month: "Jul", revenue: 102000, expenses: 55000 },
  { month: "Aug", revenue: 110000, expenses: 58000 },
  { month: "Sep", revenue: 108000, expenses: 57000 },
  { month: "Oct", revenue: 118000, expenses: 62000 },
  { month: "Nov", revenue: 115000, expenses: 60000 },
  { month: "Dec", revenue: 124592, expenses: 65000 },
];

export const userGrowthData = [
  { month: "Jan", newUsers: 1200, churned: 320 },
  { month: "Feb", newUsers: 1450, churned: 290 },
  { month: "Mar", newUsers: 1380, churned: 310 },
  { month: "Apr", newUsers: 1620, churned: 280 },
  { month: "May", newUsers: 1890, churned: 350 },
  { month: "Jun", newUsers: 2100, churned: 420 },
  { month: "Jul", newUsers: 2350, churned: 390 },
  { month: "Aug", newUsers: 2580, churned: 410 },
  { month: "Sep", newUsers: 2420, churned: 380 },
  { month: "Oct", newUsers: 2780, churned: 440 },
  { month: "Nov", newUsers: 3100, churned: 460 },
  { month: "Dec", newUsers: 3420, churned: 490 },
];

export const trafficSources = [
  { name: "Organic Search", value: 38, color: "#6366f1" },
  { name: "Direct", value: 24, color: "#8b5cf6" },
  { name: "Social Media", value: 18, color: "#a78bfa" },
  { name: "Referral", value: 12, color: "#c4b5fd" },
  { name: "Email", value: 8, color: "#ddd6fe" },
];

export const mrrData = [
  { month: "Jan", mrr: 12400, expansion: 1200, contraction: -800, churn: -400 },
  { month: "Feb", mrr: 13200, expansion: 1400, contraction: -700, churn: -350 },
  { month: "Mar", mrr: 13800, expansion: 1100, contraction: -900, churn: -420 },
  { month: "Apr", mrr: 14600, expansion: 1600, contraction: -600, churn: -380 },
  { month: "May", mrr: 15400, expansion: 1800, contraction: -750, churn: -410 },
  { month: "Jun", mrr: 15900, expansion: 1500, contraction: -820, churn: -390 },
  { month: "Jul", mrr: 16800, expansion: 2100, contraction: -680, churn: -360 },
  { month: "Aug", mrr: 17500, expansion: 1900, contraction: -720, churn: -400 },
  { month: "Sep", mrr: 17200, expansion: 1600, contraction: -850, churn: -430 },
  { month: "Oct", mrr: 18100, expansion: 2200, contraction: -700, churn: -380 },
  { month: "Nov", mrr: 18800, expansion: 2000, contraction: -760, churn: -410 },
  { month: "Dec", mrr: 18420, expansion: 1800, contraction: -900, churn: -460 },
];

export const channelPerformance = [
  { channel: "SEO", leads: 4200, conversions: 840, revenue: 42000 },
  { channel: "PPC", leads: 3100, conversions: 620, revenue: 31000 },
  { channel: "Social", leads: 2800, conversions: 420, revenue: 21000 },
  { channel: "Email", leads: 1900, conversions: 570, revenue: 28500 },
  { channel: "Referral", leads: 1400, conversions: 350, revenue: 17500 },
  { channel: "Direct", leads: 2200, conversions: 660, revenue: 33000 },
];

export const revenueBreakdown = [
  { plan: "Starter", users: 18420, mrr: 3684, percentage: 20 },
  { plan: "Professional", users: 21340, mrr: 8536, percentage: 46.3 },
  { plan: "Business", users: 6890, mrr: 4134, percentage: 22.4 },
  { plan: "Enterprise", users: 1641, mrr: 2066, percentage: 11.2 },
];

export const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", plan: "Professional", status: "Active", joinDate: "2024-01-15", revenue: "$149/mo", avatar: "AJ" },
  { id: 2, name: "Bob Martinez", email: "bob@example.com", plan: "Starter", status: "Active", joinDate: "2024-02-03", revenue: "$29/mo", avatar: "BM" },
  { id: 3, name: "Carol White", email: "carol@example.com", plan: "Business", status: "Active", joinDate: "2023-11-20", revenue: "$299/mo", avatar: "CW" },
  { id: 4, name: "David Chen", email: "david@example.com", plan: "Enterprise", status: "Active", joinDate: "2023-09-08", revenue: "$999/mo", avatar: "DC" },
  { id: 5, name: "Emma Davis", email: "emma@example.com", plan: "Professional", status: "Inactive", joinDate: "2024-03-12", revenue: "$149/mo", avatar: "ED" },
  { id: 6, name: "Frank Wilson", email: "frank@example.com", plan: "Starter", status: "Active", joinDate: "2024-04-01", revenue: "$29/mo", avatar: "FW" },
  { id: 7, name: "Grace Lee", email: "grace@example.com", plan: "Business", status: "Active", joinDate: "2023-12-15", revenue: "$299/mo", avatar: "GL" },
  { id: 8, name: "Henry Brown", email: "henry@example.com", plan: "Professional", status: "Churned", joinDate: "2023-08-22", revenue: "$0/mo", avatar: "HB" },
  { id: 9, name: "Iris Taylor", email: "iris@example.com", plan: "Enterprise", status: "Active", joinDate: "2023-07-10", revenue: "$999/mo", avatar: "IT" },
  { id: 10, name: "Jack Anderson", email: "jack@example.com", plan: "Starter", status: "Active", joinDate: "2024-05-18", revenue: "$29/mo", avatar: "JA" },
  { id: 11, name: "Karen Thomas", email: "karen@example.com", plan: "Professional", status: "Active", joinDate: "2024-01-28", revenue: "$149/mo", avatar: "KT" },
  { id: 12, name: "Liam Jackson", email: "liam@example.com", plan: "Business", status: "Inactive", joinDate: "2023-10-05", revenue: "$299/mo", avatar: "LJ" },
  { id: 13, name: "Mia Harris", email: "mia@example.com", plan: "Starter", status: "Active", joinDate: "2024-06-02", revenue: "$29/mo", avatar: "MH" },
  { id: 14, name: "Noah Martin", email: "noah@example.com", plan: "Professional", status: "Active", joinDate: "2024-02-14", revenue: "$149/mo", avatar: "NM" },
  { id: 15, name: "Olivia Garcia", email: "olivia@example.com", plan: "Enterprise", status: "Active", joinDate: "2023-06-30", revenue: "$999/mo", avatar: "OG" },
  { id: 16, name: "Paul Rodriguez", email: "paul@example.com", plan: "Business", status: "Active", joinDate: "2023-11-11", revenue: "$299/mo", avatar: "PR" },
  { id: 17, name: "Quinn Lewis", email: "quinn@example.com", plan: "Starter", status: "Churned", joinDate: "2023-09-25", revenue: "$0/mo", avatar: "QL" },
  { id: 18, name: "Rachel Walker", email: "rachel@example.com", plan: "Professional", status: "Active", joinDate: "2024-03-08", revenue: "$149/mo", avatar: "RW" },
  { id: 19, name: "Sam Hall", email: "sam@example.com", plan: "Business", status: "Active", joinDate: "2024-01-05", revenue: "$299/mo", avatar: "SH" },
  { id: 20, name: "Tina Allen", email: "tina@example.com", plan: "Enterprise", status: "Active", joinDate: "2023-05-14", revenue: "$999/mo", avatar: "TA" },
];

export const notifications = [
  { id: 1, type: "payment", title: "Payment received", message: "Invoice #1042 for $1,200 has been paid by Acme Corp.", time: "2 min ago", read: false, date: "today" },
  { id: 2, type: "user", title: "New user signup", message: "Sarah Connor just signed up for the Professional plan.", time: "18 min ago", read: false, date: "today" },
  { id: 3, type: "alert", title: "High churn alert", message: "Churn rate exceeded 3% threshold in the last 7 days.", time: "1 hr ago", read: false, date: "today" },
  { id: 4, type: "system", title: "System update", message: "Dashboard v2.4.1 has been deployed successfully.", time: "3 hrs ago", read: true, date: "today" },
  { id: 5, type: "payment", title: "Subscription upgraded", message: "TechStart Inc. upgraded from Starter to Business plan.", time: "5 hrs ago", read: true, date: "today" },
  { id: 6, type: "user", title: "User churned", message: "Henry Brown cancelled their Professional subscription.", time: "Yesterday, 4:30 PM", read: false, date: "yesterday" },
  { id: 7, type: "alert", title: "API rate limit warning", message: "You've used 85% of your monthly API quota.", time: "Yesterday, 2:15 PM", read: true, date: "yesterday" },
  { id: 8, type: "payment", title: "Failed payment", message: "Payment for account #2891 failed. Retry scheduled.", time: "Yesterday, 11:00 AM", read: true, date: "yesterday" },
  { id: 9, type: "system", title: "Backup completed", message: "Weekly data backup completed successfully.", time: "2 days ago", read: true, date: "older" },
  { id: 10, type: "user", title: "New enterprise signup", message: "GlobalTech Ltd. signed up for the Enterprise plan.", time: "3 days ago", read: true, date: "older" },
  { id: 11, type: "alert", title: "Security scan complete", message: "Monthly security scan found no vulnerabilities.", time: "4 days ago", read: true, date: "older" },
  { id: 12, type: "payment", title: "Revenue milestone", message: "Congratulations! You've reached $100K in monthly revenue.", time: "5 days ago", read: true, date: "older" },
];

export const planOptions = [
  { name: "Starter", price: "$29/mo", features: ["Up to 5 users", "10GB storage", "Basic analytics", "Email support"] },
  { name: "Professional", price: "$149/mo", features: ["Up to 25 users", "100GB storage", "Advanced analytics", "Priority support", "API access"] },
  { name: "Business", price: "$299/mo", features: ["Up to 100 users", "500GB storage", "Full analytics suite", "24/7 support", "API access", "Custom integrations"] },
  { name: "Enterprise", price: "$999/mo", features: ["Unlimited users", "Unlimited storage", "Enterprise analytics", "Dedicated support", "API access", "Custom integrations", "SLA guarantee"] },
];
