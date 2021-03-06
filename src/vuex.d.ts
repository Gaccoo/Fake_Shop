
import { Store } from 'vuex'
import { Product} from "@/store";

declare module '@vue/runtime-core' {
    // declare your own store states
    export interface State {
        shopData: Product[]
        shopCategories: string[]
        searchQueue: string
        activeCategory: string | undefined
        activeItem: number | undefined
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
