export default function SectionOne() {
  return (
    <section className="section-1">
      <div className="header">
        <h1>Keep track of your snippets</h1>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className="section-1-image">
        <img src="image-computer.png" alt="computer" />
      </div>
      <div className="details">
        <div className="detail-1">
          <h2>Quick Search</h2>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        <div className="detail-2">
          <h2>iCloud Sync</h2>
          <p>Instantly saves and syncs snippets across all your devices.</p>
        </div>
        <div className="detail-3">
          <h2>Complete History</h2>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </section>
  );
}
