const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('API request failed:', error);
      return { error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  async getOperations(params?: {
    user?: string;
    status?: string;
    opType?: string;
    fromChain?: number;
    toChain?: number;
    limit?: number;
    cursor?: string;
  }) {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
    return this.request(`/operations${query}`);
  }

  async getOperation(id: string) {
    return this.request(`/operations/${id}`);
  }

  async getHealth() {
    return this.request('/health');
  }

  async getChainsHealth() {
    return this.request('/health/chains');
  }

  // Server-Sent Events for real-time updates
  createEventStream(userAddress: string): EventSource {
    return new EventSource(`${this.baseUrl}/operations/stream?user=${userAddress}`);
  }
}

export const apiClient = new ApiClient(API_BASE_URL);