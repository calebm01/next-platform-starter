import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

export const metadata = {
    title: 'Internship'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">365 Internship</h1>
                <p>
                    During the summer of 2025 I worked as a software engineering intern at 365, a company specializing in
                    payment and kiosk technology. While there, I contributed to several projects, including extensive documentation
                    on two codebases for payment applications. These programs were the applications that ran on card readers, I went
                    through and documented the primary threads used in the applications, as well as the main classes and functions.

                    Additionally, I developed a web application for organizing terminals in use by the kiosks across the company, this 
                    web app would allow employees to see which terminals were active, and provided a way to group them by location or function.
                    Users could generate new groups of terminals to better manage and monitor the devices in use.

                    The documentation involved reading and interpreting C code, while the web app was written in Java utilizing Gradle and
                    Springboot.

                    While developing the web application, I became familiarized with API calls, which were needed to access a database of terminals
                    and their statuses. I also learned about user authentication and authorization to ensure that only authorized personnel could access
                    certain features of the application. While working with this API functionality, I gained a lot of experience using 
                    Postman to test and debug API requests and responses.

                    Overall, my internship at 365 provided me with valuable experience in software engineering, documentation, and web application development, 
                    as well as exposure to industry practices and workflows.

                </p>
            </section>
        </div>
    );
}