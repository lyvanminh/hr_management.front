// export const HOME_URL = 'http://localhost:8080';// 'http://backuptk.info';
export const HOME_URL = 'http://backuptk.info';
export const API_URL = HOME_URL + '/api/v1';
export const ROOT_IMAGE = '/assets/media';
export const pageSize = process.env.MIX_PAGE_SIZE || 20;

export const VIA_DATA_STATUS = {
    'NEW': 'New',
    'LOGIN_FAILED': 'Login',
    'LOGIN_SUCCESS': 'Login',
    'PASS_CHECKPOINT_FAILED': 'Checkpoint',
    'PASS_CHECKPOINT_SUCCESS': 'Checkpoint',
    'CHECK_ADS_SUCCESS': 'AdsDone',
    'CHANGE_PASS_SUCCESS': 'ChangePass',
    'LOGIN_FAILED_API': 'WrongPass/2FA',
    'VIA_DONE': 'Done',
};

export const VIA_DATA_STATUS_REAL_TEXT = {
    'NEW': 'New',
    'LOGIN_FAILED': 'Login thất bại',
    'LOGIN_SUCCESS': 'Login thành công',
    'PASS_CHECKPOINT_FAILED': 'Checkpoint thất bại',
    'PASS_CHECKPOINT_SUCCESS': 'Checkpoint thành công',
    'CHECK_ADS_SUCCESS': 'AdsDone',
    'CHANGE_PASS_SUCCESS': 'Changed Pass',
    'LOGIN_FAILED_API': 'Wrong Pass / 2FA',
    'VIA_DONE': 'Done',
};

export const VIA_DATA_STATUS_CONST = ['NEW', 'LOGIN_FAILED', 'LOGIN_SUCCESS', 'PASS_CHECKPOINT_FAILED',
    'PASS_CHECKPOINT_SUCCESS', 'CHECK_ADS_SUCCESS', 'CHANGE_PASS_SUCCESS', 'LOGIN_FAILED_API', 'VIA_DONE'];

export const VIA_DATA_STATUS_COLOR = {
    'NEW': 'info',
    'LOGIN_FAILED': 'danger',
    'LOGIN_SUCCESS': 'success',
    'PASS_CHECKPOINT_FAILED': 'danger',
    'PASS_CHECKPOINT_SUCCESS': 'success',
    'CHECK_ADS_SUCCESS': 'success',
    'CHANGE_PASS_SUCCESS': 'success',
    'LOGIN_FAILED_API': 'danger',
    'VIA_DONE': 'success',
};

export const USER_STATUS = {
    'DEACTIVATED': 'Chưa kích hoạt',
    'ACTIVATED': 'Đã kích hoạt',
    'BLOCKED': 'Đã khóa',
};

export const USER_STATUS_COLOR = {
    'DEACTIVATED': 'primary',
    'ACTIVATED': 'success',
    'BLOCKED': 'danger',
};

export const USER_STATUS_CONST = [
    'DEACTIVATED', 'ACTIVATED', 'BLOCKED'
];


export const USER_ROLE_CONST = [
    'ADMIN', 'EMPLOYEE', 'AGENT'
];

export const USER_ROLE = {
    'ADMIN': 'Admin',
    'EMPLOYEE': 'Nhân viên',
    'AGENT': 'Agent'
};

export const USER_LOG_CONST = [
    'TAKE_NEW', 'CHECK_ADS', 'VIA_DONE', 'IMPORT_DATA', 'VIA_FAILED'
];

export const USER_LOG_COLOR = {
    'TAKE_NEW': 'info',
    'CHECK_ADS': 'primary',
    'VIA_DONE': 'success',
    'IMPORT_DATA': 'info',
    'VIA_FAILED': 'danger',
};

export const USER_LOG_REAL_TEXT  = {
    'TAKE_NEW': 'Lấy data',
    'CHECK_ADS': 'Check Ads',
    'VIA_DONE': 'Via thành công',
    'IMPORT_DATA': 'Import data',
    'VIA_FAILED': 'Via thất bại'
};