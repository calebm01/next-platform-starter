import { Markdown } from 'components/markdown';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'WPF Work'
};

export default function FallbackPage() {
    return (
        <>
            <h1 className="mb-8">Airline Seat Reservation System</h1>
            <section>
                <h2 className="mb-6">This assignment was the last solo venture we were tasked with in my WPF class at Weber State University.
                    This project entailed creating a system for users to view 2 plane seating arrangements.
                    Users can click on seats to occupy them, and also have the option to change seating, or remove their seat entirely.</h2>
                <figure>
                    <div className="relative overflow-hidden border-2 border-white rounded-lg aspect-3/2">
                        <Image
                            src="/images/AirlineReservation.png"
                            priority
                            fill={true}
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            alt="Corgi"
                        />
                    </div>
                </figure>

                <div className="relative overflow-hidden border-2 border-white rounded-lg aspect-3/2">
                    <Image
                        src="/images/AirlineReservation2.png"
                        priority
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Corgi"
                    />
                </div>
            </section>

            <h1 className="mb-8">Invoice System</h1>
            <section>
                <h2 className="mb-6">The final project for my course at weber state covering WPF applications.
                    Me and my group were tasked to create an invoice system suitable for a business to update and manage a sizeable inventory.
                    In particular in this project, I worked on the Item Window which allowed administration to add, edit, and delete items within the inventory.</h2>

                <Link href="https://github.com/cameron-mckay/InvoiceSystem">
                    Repository Link
                </Link>
            </section>
        </>
    );
}
