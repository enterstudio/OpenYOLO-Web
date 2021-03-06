/*
 * Copyright 2017 The OpenYOLO for Web Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Specifies the request types that can be sent to the provider as an
 * initial URL parameter, potentially allowing the provider backend to preload
 * the necessary data to service that request. These requests MUST NOT contain
 * sensitive information; in particular, credentials MUST NOT be passed in
 * preload requests.
 */

/**
 * The types of request that can be relayed to the provider frame via an
 * initial request parameter. This can help the provider preload information
 * as part of the initial load of the iframe, to speed up handling of these
 * requests.
 */
import {CredentialHintOptions} from './data';
import {strEnum} from './enums';

export const PRELOAD_REQUEST = strEnum('hint', 'retrieve');

export interface HintPreloadRequest {
  type: typeof PRELOAD_REQUEST.hint;
  options: CredentialHintOptions;
}

export interface RetrievePreloadRequest {
  type: typeof PRELOAD_REQUEST.retrieve;
  options: CredentialRequestOptions;
}

export type PreloadRequest = HintPreloadRequest | RetrievePreloadRequest;
