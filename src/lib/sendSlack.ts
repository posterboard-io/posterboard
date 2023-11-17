export function sendSlackMessage({ logString, status, failure }: { logString: string, status: string, failure: boolean}) {
    const color = failure ? "#FF0000" : "#00FF00"; // Red for failure, Green for success
    const timestamp = new Date().toISOString();
  
    fetch(process.env.SLACK_WEBHOOK_URL || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attachments: [
          {
            color: color,
            blocks: [
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*${logString}*`,
                },
              },
              {
                type: "context",
                elements: [
                  {
                    type: "mrkdwn",
                    text: `*Status:* ${status}`,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Failure:* ${failure}`,
                  },
                ],
              },
              {
                type: "context",
                elements: [
                  {
                    type: "plain_text",
                    text: `Timestamp: ${timestamp}`,
                  },
                ],
              },
            ],
          },
        ],
      }),
    });
  }
  