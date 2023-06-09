// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metadata.proto

package org.carboncall.metadata;

/**
 * <pre>
 *Industry code prefix, i.e. ISIC
 * </pre>
 *
 * Protobuf enum {@code carboncall.metadata.IndustryCodePrefix}
 */
public enum IndustryCodePrefix
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>I_S_I_C = 0;</code>
   */
  I_S_I_C(0),
  /**
   * <code>N_A_I_C_S = 1;</code>
   */
  N_A_I_C_S(1),
  /**
   * <code>G_I_C_S = 2;</code>
   */
  G_I_C_S(2),
  /**
   * <pre>
   *TODO: add more
   * </pre>
   *
   * <code>S_I_C = 3;</code>
   */
  S_I_C(3),
  UNRECOGNIZED(-1),
  ;

  /**
   * <code>I_S_I_C = 0;</code>
   */
  public static final int I_S_I_C_VALUE = 0;
  /**
   * <code>N_A_I_C_S = 1;</code>
   */
  public static final int N_A_I_C_S_VALUE = 1;
  /**
   * <code>G_I_C_S = 2;</code>
   */
  public static final int G_I_C_S_VALUE = 2;
  /**
   * <pre>
   *TODO: add more
   * </pre>
   *
   * <code>S_I_C = 3;</code>
   */
  public static final int S_I_C_VALUE = 3;


  public final int getNumber() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalArgumentException(
          "Can't get the number of an unknown enum value.");
    }
    return value;
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   * @deprecated Use {@link #forNumber(int)} instead.
   */
  @java.lang.Deprecated
  public static IndustryCodePrefix valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static IndustryCodePrefix forNumber(int value) {
    switch (value) {
      case 0: return I_S_I_C;
      case 1: return N_A_I_C_S;
      case 2: return G_I_C_S;
      case 3: return S_I_C;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<IndustryCodePrefix>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      IndustryCodePrefix> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<IndustryCodePrefix>() {
          public IndustryCodePrefix findValueByNumber(int number) {
            return IndustryCodePrefix.forNumber(number);
          }
        };

  public final com.google.protobuf.Descriptors.EnumValueDescriptor
      getValueDescriptor() {
    if (this == UNRECOGNIZED) {
      throw new java.lang.IllegalStateException(
          "Can't get the descriptor of an unrecognized enum value.");
    }
    return getDescriptor().getValues().get(ordinal());
  }
  public final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptorForType() {
    return getDescriptor();
  }
  public static final com.google.protobuf.Descriptors.EnumDescriptor
      getDescriptor() {
    return org.carboncall.metadata.MetadataOuterClass.getDescriptor().getEnumTypes().get(3);
  }

  private static final IndustryCodePrefix[] VALUES = values();

  public static IndustryCodePrefix valueOf(
      com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
    if (desc.getType() != getDescriptor()) {
      throw new java.lang.IllegalArgumentException(
        "EnumValueDescriptor is not for this type.");
    }
    if (desc.getIndex() == -1) {
      return UNRECOGNIZED;
    }
    return VALUES[desc.getIndex()];
  }

  private final int value;

  private IndustryCodePrefix(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:carboncall.metadata.IndustryCodePrefix)
}

