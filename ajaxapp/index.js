async function main() {
  try {
    const userId = getUserId();
    const userInfo = await fetchUserInfo(userId);
    const view = await createView(userInfo);
    displayView(view);
  } catch (error) {
    console.error(`エラーが発生しました: (${error})`);
  }
}

// userInfoのフェッチ
function fetchUserInfo(userId) {
  return fetch(
    `https://api.github.com/users/${encodeURIComponent(userId)}`
  ).then((response) => {
    if (!response.ok) {
      return Promise.reject(
        new Error(`${response.status}: ${response.statusText}`)
      );
    } else {
      return response.json();
    }
  });
}

function getUserId() {
  return document.getElementById('userId').value;
}

function createView(userInfo) {
  // タグつきテンプレートリテラルでhtmlを生成する
  return escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositories</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
  `;
}

function displayView(view) {
  // HTMLを挿入する
  const result = document.getElementById('result');
  result.innerHTML = view;
}

// エスケープ処理
function escapeSpecialChars(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === 'string') {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}
