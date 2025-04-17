import { revalidateTag } from 'next/cache';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { SubmitButton } from 'components/submit-button';

export const metadata = {
    title: 'On-Demand Revalidation'
};

const tagName = 'randomWiki';
const maxExtractLength = 200;
const revalidateTTL = 60;

const explainer = `
This page perfoms a \`fetch\` on the server to get a random article from Wikipedia. 
The fetched data is then cached with a tag named "${tagName}" and a maximum age of ${revalidateTTL} seconds.

~~~jsx
const url = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';

async function RandomArticleComponent() {
    const randomArticle = await fetch(url, {
        next: { revalidate: ${revalidateTTL}, tags: ['${tagName}'] }
    });
    // ...render
}
~~~

After the set time has passed, the first request for this page would trigger its rebuild in the background. When the new page is ready, subsequent requests would return the new page - 
see [\`stale-white-revalidate\`](https://www.netlify.com/blog/swr-and-fine-grained-cache-control/).

Alternatively, if the cache tag is explicitly invalidated by \`revalidateTag('${tagName}')\`, any page using that tag would be rebuilt in the background when requested.

In real-life applications, tags are typically invalidated when data has changed in an external system (e.g., the CMS notifies the site about content changes via a webhook), or after a data mutation made through the site.

For this functionality to work, Next.js uses the [fine-grained caching headers](https://docs.netlify.com/platform/caching/) available on Netlify - but you can use these features on basically any Netlify site!
`;

export default async function Page() {
    async function revalidateWiki() {
        'use server';
        revalidateTag(tagName);
    }

    return (
        <>
            <h1 className="mb-8">Social Media Site</h1>
            <section>
                <h2 className="mb-6">This was a solo final project for my class at Weber State covering python and django backend and frontend.
                    Its a very simple social media site meant to allow users to create posts, follow friends, and more. </h2>
                <figure>
                    <div className="relative overflow-hidden border-2 border-white rounded-lg aspect-3/2">
                        <Image
                            src="/images/SocialSiteMainPage.png"
                            priority
                            fill={true}
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            alt="Corgi"
                        />
                    </div>
                </figure>
                <Link href="https://github.com/calebm01/CS3620_FinalProject">
                    Repository Link
                </Link>
            </section>
        </>
    );
}
