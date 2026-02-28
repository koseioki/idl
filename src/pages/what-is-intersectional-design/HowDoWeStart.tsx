import { Note } from "../../components/global/Note";
import { H1 } from "../../components/header-and-footer/H1";
import { InTextCitation } from "../../components/resources/InTextCitation";
import { References } from "../../components/resources/References";
export function HowDoWeStart() {
    return (
        <main id="main-content">
            <H1>How Do We Start?</H1>
            <Note title="Note:">
                <p>
                    This page is a work in progress. We are still developing the content.
                </p>
                <p>
                    Last updated: 
                    {new Date("2026-02-28").toLocaleDateString([], {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </p>
            </Note>

            <blockquote>
                <p>Realizing that you do have privileges—no matter who you are-does not mean feeling miserable and guilty for the rest of your life, just conscious: of both the advantages and the disadvantages that every one of us has because of the statuses we occupy, some by birth and some by choice.</p>
            </blockquote>
            <cite>
                <InTextCitation id="34567890" />
            </cite>
            <References ids={["34567890"]} />
            </main>
    )
}