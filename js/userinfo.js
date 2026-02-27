function clickAnalytics(name) {
  gtag('event', 'tool_used', {
    click: name
  });
}
