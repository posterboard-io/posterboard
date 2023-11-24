import {
  Card,
  CardContent,
} from "~/components/ui/card"
import ContactUsForm from "~/components/pb/contact-us-form"

export default async function ContactUs() {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card>
          <CardContent>
            <ContactUsForm />
          </CardContent>
        </Card>
      </div>
    );
  }