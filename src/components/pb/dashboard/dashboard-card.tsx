import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

export default function DashboardCard({ 
    cardTitle, cardContent, 
    cardContentDesc, cardIcon
}: { 
    cardTitle: string, cardContent: string, 
    cardContentDesc: string, cardIcon?: string
}) {


    // TODO: add some sort of enum / match function for cardIcon 

    return (
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {cardTitle}
          </CardTitle>
          {/* <{cardIcon} className="h-4 w-4 text-muted-foreground" />           */}            
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {cardContent}
          </div>
          <p className="text-xs text-muted-foreground">
            {cardContentDesc}
          </p>
        </CardContent>
      </Card>
    )
}