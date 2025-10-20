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
                    Text here explaining my thoughts and experiences working as an intern at 365 Retail Markets
                </p>
            </section>
        </div>
    );
}