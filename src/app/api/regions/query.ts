"use client"
import { useQuery } from "@tanstack/react-query";
import { getRegions } from "./actions";

export const useRegionsQuery = () =>
	useQuery({
		queryKey: ["regions"],
		queryFn: () =>
			getRegions()
				.then((res) => res.data)
				.catch((err) => console.log(err)),
	});
