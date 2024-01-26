// TODO: Honestly - not sure if I even want to include this - who even really uses this? Most people would just sign up for an account...

export default function FooterNewsletter() {
    return (
        <section className="py-8">
                    <div className="container mx-auto px-2 py-2 flex justify-center">
                        <h3 className="text-sm sm:text-base font-semibold mb-4">Sign up for our newsletter</h3>
                    </div>
                    <div className="container mx-auto px-2 py-2 flex justify-center">
                        <form className="flex items-center">
                            <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
                        </form>
                    </div>
                </section>
    )
}