import SectionThreeSub from "./SectionThreeSub";

export default function SectionThree() {
  return (
    <section className="section-3">
      <div className="header">
        <h1>Supercharge your workflow</h1>
        <p>We've got the tools to boost your productivity.</p>
      </div>
      <SectionThreeSub
        image="icon-blacklist.svg"
        heading="Create blacklists"
        content="Ensure sensitive information never makes its way to your clipboard by
        excluding certain sources."
      />
      <SectionThreeSub
        image="icon-text.svg"
        heading="Plain text snippets"
        content="Remove unwanted formatting from copied text for a consistent look."
      />
      <SectionThreeSub
        image="icon-preview.svg"
        heading="Sneak preview"
        content="Quick preview of all snippets on your Clipboard for easy access."
      />
    </section>
  );
}
