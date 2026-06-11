import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/404" | "/discord" | "/docs" | "/docs/[...2]getting-started/[...2]installing-animated-java" | "/docs/[...2]getting-started/[...3]creating-a-blueprint" | "/docs/[...2]getting-started/[...4]exporting-your-blueprint" | "/docs/[...3]the-blueprint-format/[...10]cameras" | "/docs/[...3]the-blueprint-format/[...1]overview" | "/docs/[...3]the-blueprint-format/[...2]settings" | "/docs/[...3]the-blueprint-format/[...3]variants" | "/docs/[...3]the-blueprint-format/[...4]bones" | "/docs/[...3]the-blueprint-format/[...5]animations" | "/docs/[...3]the-blueprint-format/[...6]locators" | "/docs/[...3]the-blueprint-format/[...7]item-displays" | "/docs/[...3]the-blueprint-format/[...8]block-displays" | "/docs/[...3]the-blueprint-format/[...9]text-displays" | "/docs/[...4]rigs/[...1]overview" | "/docs/[...4]rigs/[...2]summoning-a-new-rig-instance" | "/docs/[...4]rigs/[...3]controlling-a-rig-instance" | "/docs/[...4]rigs/[...4]controlling-animation-playback" | "/docs/[...4]rigs/[...5]locators" | "/docs/[...4]rigs/[...6]cameras" | "/docs/[...4]rigs/[...7]tags" | "/docs/[...5]resources/[...1]faq" | "/docs/[...5]resources/[...2]tutorials/stacking-rigs" | "/docs/[...5]resources/[...3]installing-pre-releases" | "/docs/[...5]resources/[...4]migrating-from-older-versions" | "/docs/[...5]resources/[...5]plugin-json" | "/docs/[...6]legacy-releases/[...1]versions" | "/docs/[...6]legacy-releases/[...2]installing" | "/docs/[...6]legacy-releases/[...3]legacy-beta" | "/docs/[...6]legacy-releases/[...4]legacy-armorstands" | "/source" | "/support-us" | null
type LayoutParams = RouteParams & { 2?: string; 3?: string; 4?: string; 10?: string; 1?: string; 5?: string; 6?: string; 7?: string; 8?: string; 9?: string }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+layout.js').load>>>>>>;