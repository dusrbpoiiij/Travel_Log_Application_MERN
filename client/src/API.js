const API_URL = 'http://localhost:1337'

// nodeJS에서 지도상 point (log) 가져오기 
export async function listLogEntries() {
  const respone = await fetch(`${API_URL}/api/logs`);
  return respone.json();
}

// nodeJS에 DATA 삽입 
export async function createLogEntry(entry) {
  const response = await fetch(`${API_URL}/api/logs`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
  return response.json();
}

