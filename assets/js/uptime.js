// Live uptime counter - displays time since last shutdown
(function() {
  'use strict';

  function formatUptime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    const parts = [];
    
    if (years > 0) {
      parts.push(years + 'y');
      parts.push((days % 365) + 'd');
      parts.push((hours % 24) + 'h');
      parts.push((minutes % 60) + 'm');
      parts.push((seconds % 60) + 's');
    } else if (days > 0) {
      parts.push(days + 'd');
      parts.push((hours % 24) + 'h');
      parts.push((minutes % 60) + 'm');
      parts.push((seconds % 60) + 's');
    } else if (hours > 0) {
      parts.push(hours + 'h');
      parts.push((minutes % 60) + 'm');
      parts.push((seconds % 60) + 's');
    } else if (minutes > 0) {
      parts.push(minutes + 'm');
      parts.push((seconds % 60) + 's');
    } else {
      parts.push(seconds + 's');
    }

    return parts.join(':');
  }

  function updateCounters() {
    const currentEl = document.getElementById('uptime-current');
    const recordEl = document.getElementById('uptime-record');

    if (currentEl && currentEl.dataset.startTime) {
      const startTime = new Date(currentEl.dataset.startTime).getTime();
      const now = Date.now();
      const elapsed = now - startTime;
      currentEl.textContent = formatUptime(elapsed);
    }

    if (recordEl && recordEl.dataset.recordMs) {
      const recordMs = parseInt(recordEl.dataset.recordMs, 10);
      recordEl.textContent = formatUptime(recordMs);
    }
  }

  // Update immediately and then every second
  updateCounters();
  setInterval(updateCounters, 1000);
})();
