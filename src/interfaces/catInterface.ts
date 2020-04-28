export interface CatInitialState {
    cats: CatInterface[];
}

export interface SelectedCatInitialState {
    selectedCat: SelectedCatInterface | null;
}

export interface CatInterface {
    id: number;
    name: string;
    shortInfo: string;
    bio: string;
    more: string;
    isCreated?: boolean;
    isDeleted?: boolean;
    date?: Date | null;
}

export interface SelectedCatInterface {
    id: number;
    bio: string;
    name: string;
    pic: string;
    shotInfo: string;
}