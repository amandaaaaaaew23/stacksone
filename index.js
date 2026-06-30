const DEPLOYER = 'SP3GHKMV4GSYNA8WGBX83DACG80K1RRVQZAZMB9J3';

export const STACKSONE_MAINNET = Object.freeze({
  deployer: DEPLOYER,
  contracts: Object.freeze({
    core: 'genesis-core-v10',
    missions: 'genesis-missions-v10',
    badges: 'genesis-badges-v10',
    leaderboard: 'genesis-leaderboard-v1',
    boost: 'genesis-boost-v1',
    token: 'token-one',
  }),
});

export const STACKSONE_TASK_REWARDS = Object.freeze({
  101: 300,
  102: 450,
  103: 220,
  104: 190,
  105: 280,
  106: 320,
  107: 550,
  108: 250,
  109: 210,
  110: 1200,
});

function asNonNegativeInteger(value, label) {
  const parsed = Number(value);

  if (!Number.isSafeInteger(parsed) || parsed < 0) {
    throw new TypeError(`${label} must be a non-negative safe integer`);
  }

  return parsed;
}

export function calculateLevel(xp) {
  const normalizedXp = asNonNegativeInteger(xp, 'xp');
  return Math.floor(normalizedXp / 500) + 1;
}

export function getRankTier(score) {
  const normalizedScore = asNonNegativeInteger(score, 'score');

  if (normalizedScore >= 1000) return 3;
  if (normalizedScore >= 500) return 2;
  if (normalizedScore >= 100) return 1;
  return 0;
}

export function getTaskReward(taskId) {
  const normalizedTaskId = asNonNegativeInteger(taskId, 'taskId');
  return STACKSONE_TASK_REWARDS[normalizedTaskId] ?? null;
}

export function getContractId(contractName, deployer = DEPLOYER) {
  if (typeof contractName !== 'string' || contractName.trim() === '') {
    throw new TypeError('contractName must be a non-empty string');
  }

  if (typeof deployer !== 'string' || deployer.trim() === '') {
    throw new TypeError('deployer must be a non-empty string');
  }

  return `${deployer.trim()}.${contractName.trim()}`;
}

export function getExplorerContractUrl(contractName, deployer = DEPLOYER) {
  return `https://explorer.hiro.so/address/${getContractId(contractName, deployer)}?chain=mainnet`;
}
