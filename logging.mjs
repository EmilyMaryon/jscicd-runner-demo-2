#!/usr/bin/env zx

await $`for i in {1..10000}; do echo 'testlogline' && sleep 0.01; done`
