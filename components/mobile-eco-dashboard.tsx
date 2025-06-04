"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Leaf,
  Truck,
  AlertTriangle,
  Calendar,
  BarChart3,
  Settings,
  FileText,
  CheckCircle2,
} from "lucide-react"

export function MobileEcoDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Dashboard")

  const navigationItems = [
    { name: "Dashboard", icon: BarChart3 },
    { name: "Fleet", icon: Truck },
    { name: "Compliance", icon: CheckCircle2 },
    { name: "Reports", icon: FileText },
    { name: "Settings", icon: Settings },
  ]

  const metrics = [
    {
      title: "Carbon Footprint",
      value: "78.5 tonnes",
      change: "-12% from last month",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Compliance Score",
      value: "92%",
      change: "+3% from last month",
      icon: CheckCircle2,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Active Vehicles",
      value: "24/28",
      change: "4 in maintenance",
      icon: Truck,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      title: "Alerts",
      value: "3",
      change: "2 high priority",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ]

  const upcomingDeadlines = [
    {
      title: "ULEZ Compliance Review",
      dueDate: "Due in 7 days",
      priority: "high",
      icon: CheckCircle2,
    },
    {
      title: "Quarterly Emissions Report",
      dueDate: "Due in 14 days",
      priority: "medium",
      icon: FileText,
    },
    {
      title: "Fleet Emissions Testing",
      dueDate: "Due in 21 days",
      priority: "low",
      icon: Truck,
    },
  ]

  const emissionsData = [
    { month: "Jan", target: 85, actual: 78 },
    { month: "Feb", target: 82, actual: 75 },
    { month: "Mar", target: 80, actual: 73 },
    { month: "Apr", target: 78, actual: 71 },
    { month: "May", target: 75, actual: 69 },
    { month: "Jun", target: 73, actual: 67 },
    { month: "Jul", target: 70, actual: 65 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">EcoHaulage</h1>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant={activeTab === item.name ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(item.name)}
                  className={`${
                    activeTab === item.name ? "bg-green-600 text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              )
            })}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant={activeTab === item.name ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      setActiveTab(item.name)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full justify-start ${
                      activeTab === item.name ? "bg-green-600 text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                )
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card key={index} className={`${metric.borderColor} border-2`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                      <Icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {metric.change.includes("+") ? "Up" : metric.change.includes("-") ? "Down" : "Info"}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.change}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts and Data Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Emissions Trend */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Emissions Trend</CardTitle>
              <p className="text-sm text-gray-600">Monthly CO2 emissions for your fleet</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Mobile-friendly chart representation */}
                <div className="space-y-2">
                  {emissionsData.slice(-4).map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                          <span className="text-xs text-gray-600">Target: {data.target}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">Actual: {data.actual}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart visualization for larger screens */}
                <div className="hidden sm:block">
                  <div className="h-48 bg-gradient-to-t from-green-50 to-transparent rounded-lg p-4 flex items-end justify-between">
                    {emissionsData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center space-y-1">
                        <div className="flex flex-col items-center space-y-1">
                          <div
                            className="w-6 bg-green-500 rounded-t"
                            style={{ height: `${(data.actual / 100) * 120}px` }}
                          ></div>
                          <div
                            className="w-6 bg-orange-400 rounded-t opacity-50"
                            style={{ height: `${(data.target / 100) * 120}px`, marginTop: "-120px" }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">{data.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Upcoming Compliance Deadlines</CardTitle>
              <p className="text-sm text-gray-600">Regulatory requirements due in the next 30 days</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => {
                  const Icon = deadline.icon
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg ${
                            deadline.priority === "high"
                              ? "bg-red-100"
                              : deadline.priority === "medium"
                                ? "bg-yellow-100"
                                : "bg-green-100"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 ${
                              deadline.priority === "high"
                                ? "text-red-600"
                                : deadline.priority === "medium"
                                  ? "text-yellow-600"
                                  : "text-green-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">{deadline.title}</h4>
                          <p className="text-xs text-gray-600">{deadline.dueDate}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        View
                      </Button>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center space-y-2">
                <FileText className="w-5 h-5" />
                <span className="text-xs">Generate Report</span>
              </Button>
              <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center space-y-2">
                <Truck className="w-5 h-5" />
                <span className="text-xs">Add Vehicle</span>
              </Button>
              <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center space-y-2">
                <Calendar className="w-5 h-5" />
                <span className="text-xs">Schedule Test</span>
              </Button>
              <Button variant="outline" size="sm" className="h-auto p-3 flex flex-col items-center space-y-2">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-xs">View Alerts</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
