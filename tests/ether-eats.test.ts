import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { CustomerReputationIncreased } from "../generated/schema"
import { CustomerReputationIncreased as CustomerReputationIncreasedEvent } from "../generated/EtherEats/EtherEats"
import { handleCustomerReputationIncreased } from "../src/ether-eats"
import { createCustomerReputationIncreasedEvent } from "./ether-eats-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let customer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let newCustomerReputationIncreasedEvent = createCustomerReputationIncreasedEvent(
      customer,
      amount
    )
    handleCustomerReputationIncreased(newCustomerReputationIncreasedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CustomerReputationIncreased created and stored", () => {
    assert.entityCount("CustomerReputationIncreased", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CustomerReputationIncreased",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "customer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CustomerReputationIncreased",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
