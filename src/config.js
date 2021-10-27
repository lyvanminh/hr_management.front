// export const HOME_URL = 'http://localhost:8080';// 'http://backuptk.info';
export const HOME_URL = 'http://localhost:3000';
export const API_URL = HOME_URL + '/api/v1';
export const ROOT_IMAGE = '/assets/media';
export const pageSize = process.env.MIX_PAGE_SIZE || 20;

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