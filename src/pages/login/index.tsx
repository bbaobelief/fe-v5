/*
 * Copyright 2022 Nightingale Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React from 'react';
import { message } from 'antd';
import { getRedirectURLCAS } from '@/services/login';
import './login.less';

export default function Login() {
  getRedirectURLCAS().then((res) => {
    if (res.dat) {
      window.location.href = res.dat.redirect;
      localStorage.setItem('CAS_state', res.dat.state);
    } else {
      message.warning('没有配置 CAS 登录地址！');
    }
  });

  return <div></div>;
}
