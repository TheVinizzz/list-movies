export type IFilters = {
    search: string | undefined;
    setSearch: (data: string | undefined) => void
    refetch: any;
}